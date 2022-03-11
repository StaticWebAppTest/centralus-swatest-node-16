module.exports = async function (context, req) {
  const date = "2022-03-11T09:10:32.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

