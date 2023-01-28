module.exports = async function (context, req) {
  const date = "2023-01-28T11:07:15.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

