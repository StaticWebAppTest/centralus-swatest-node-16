module.exports = async function (context, req) {
  const date = "2023-03-23T06:12:08.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

