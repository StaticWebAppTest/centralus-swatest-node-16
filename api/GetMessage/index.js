module.exports = async function (context, req) {
  const date = "2023-05-03T10:09:21.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

