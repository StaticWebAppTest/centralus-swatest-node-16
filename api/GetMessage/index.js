module.exports = async function (context, req) {
  const date = "2022-08-01T11:09:54.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

