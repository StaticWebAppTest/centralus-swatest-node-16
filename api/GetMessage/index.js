module.exports = async function (context, req) {
  const date = "2024-02-02T18:12:02.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

