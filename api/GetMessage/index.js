module.exports = async function (context, req) {
  const date = "2022-10-25T09:24:38.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

