module.exports = async function (context, req) {
  const date = "2024-06-23T07:10:36.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

