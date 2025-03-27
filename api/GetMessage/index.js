module.exports = async function (context, req) {
  const date = "2025-03-27T10:13:21.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

