module.exports = async function (context, req) {
  const date = "2025-09-14T18:15:32.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

