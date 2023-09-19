module.exports = async function (context, req) {
  const date = "2023-09-19T21:07:40.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

