module.exports = async function (context, req) {
  const date = "2023-03-11T23:09:19.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

