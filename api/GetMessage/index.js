module.exports = async function (context, req) {
  const date = "2025-05-12T08:19:10.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

