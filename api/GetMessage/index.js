module.exports = async function (context, req) {
  const date = "2023-01-23T23:09:20.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

