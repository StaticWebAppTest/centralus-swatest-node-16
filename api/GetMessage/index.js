module.exports = async function (context, req) {
  const date = "2023-03-22T07:08:40.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

