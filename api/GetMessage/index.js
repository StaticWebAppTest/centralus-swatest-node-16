module.exports = async function (context, req) {
  const date = "2023-04-19T10:09:40.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

