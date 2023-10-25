module.exports = async function (context, req) {
  const date = "2023-10-25T09:09:33.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

