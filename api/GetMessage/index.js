module.exports = async function (context, req) {
  const date = "2023-03-28T23:09:01.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

