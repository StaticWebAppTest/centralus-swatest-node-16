module.exports = async function (context, req) {
  const date = "2023-07-28T17:07:26.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

