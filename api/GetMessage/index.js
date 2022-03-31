module.exports = async function (context, req) {
  const date = "2022-03-31T20:11:14.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

