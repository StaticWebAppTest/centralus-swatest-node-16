module.exports = async function (context, req) {
  const date = "2022-10-12T17:35:28.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

