module.exports = async function (context, req) {
  const date = "2024-05-16T07:08:07.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

