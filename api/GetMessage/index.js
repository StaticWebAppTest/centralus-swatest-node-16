module.exports = async function (context, req) {
  const date = "2023-03-23T08:12:08.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

