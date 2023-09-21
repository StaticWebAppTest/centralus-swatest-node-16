module.exports = async function (context, req) {
  const date = "2023-09-21T08:11:40.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

