module.exports = async function (context, req) {
  const date = "2025-05-07T15:14:48.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

