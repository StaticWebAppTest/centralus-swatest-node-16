module.exports = async function (context, req) {
  const date = "2023-10-23T08:12:34.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

