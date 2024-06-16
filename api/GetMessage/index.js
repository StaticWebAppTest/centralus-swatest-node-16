module.exports = async function (context, req) {
  const date = "2024-06-16T08:11:41.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

