module.exports = async function (context, req) {
  const date = "2022-07-04T08:13:54.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

