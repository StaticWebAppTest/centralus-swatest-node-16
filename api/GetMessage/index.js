module.exports = async function (context, req) {
  const date = "2023-03-22T18:11:30.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

