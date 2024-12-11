module.exports = async function (context, req) {
  const date = "2024-12-11T17:11:10.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

