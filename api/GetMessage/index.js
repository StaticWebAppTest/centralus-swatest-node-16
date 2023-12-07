module.exports = async function (context, req) {
  const date = "2023-12-07T18:12:07.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

