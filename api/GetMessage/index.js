module.exports = async function (context, req) {
  const date = "2023-09-03T18:09:45.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

