module.exports = async function (context, req) {
  const date = "2023-05-27T08:10:25.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

