module.exports = async function (context, req) {
  const date = "2023-10-22T03:09:15.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

