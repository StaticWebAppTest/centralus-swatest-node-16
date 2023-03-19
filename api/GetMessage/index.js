module.exports = async function (context, req) {
  const date = "2023-03-19T23:09:07.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

