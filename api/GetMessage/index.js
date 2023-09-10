module.exports = async function (context, req) {
  const date = "2023-09-10T16:09:42.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

