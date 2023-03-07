module.exports = async function (context, req) {
  const date = "2023-03-07T07:08:28.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

