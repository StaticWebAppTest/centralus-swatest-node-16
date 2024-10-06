module.exports = async function (context, req) {
  const date = "2024-10-06T04:14:25.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

