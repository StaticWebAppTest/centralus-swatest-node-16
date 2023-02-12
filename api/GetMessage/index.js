module.exports = async function (context, req) {
  const date = "2023-02-12T16:11:45.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

