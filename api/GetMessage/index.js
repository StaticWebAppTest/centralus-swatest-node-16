module.exports = async function (context, req) {
  const date = "2023-05-06T07:08:24.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

