module.exports = async function (context, req) {
  const date = "2022-10-10T13:53:36.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

