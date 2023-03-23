module.exports = async function (context, req) {
  const date = "2023-03-23T02:02:11.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

