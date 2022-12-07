module.exports = async function (context, req) {
  const date = "2022-12-07T09:09:45.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

