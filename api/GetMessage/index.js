module.exports = async function (context, req) {
  const date = "2022-12-08T02:16:12.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

