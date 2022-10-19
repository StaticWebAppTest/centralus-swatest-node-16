module.exports = async function (context, req) {
  const date = "2022-10-19T13:50:25.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

