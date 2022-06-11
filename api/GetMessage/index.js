module.exports = async function (context, req) {
  const date = "2022-06-11T13:18:11.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

