module.exports = async function (context, req) {
  const date = "2024-03-19T04:11:07.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

