module.exports = async function (context, req) {
  const date = "2025-05-21T21:12:14.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

