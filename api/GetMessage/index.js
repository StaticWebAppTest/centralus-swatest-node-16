module.exports = async function (context, req) {
  const date = "2023-10-30T09:09:08.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

