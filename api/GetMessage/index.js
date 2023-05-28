module.exports = async function (context, req) {
  const date = "2023-05-28T17:07:20.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

