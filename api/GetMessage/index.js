module.exports = async function (context, req) {
  const date = "2022-04-06T00:50:44.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

