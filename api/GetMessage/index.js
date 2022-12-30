module.exports = async function (context, req) {
  const date = "2022-12-30T18:11:12.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

