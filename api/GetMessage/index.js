module.exports = async function (context, req) {
  const date = "2023-05-28T09:09:08.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

