module.exports = async function (context, req) {
  const date = "2022-10-23T07:18:40.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

